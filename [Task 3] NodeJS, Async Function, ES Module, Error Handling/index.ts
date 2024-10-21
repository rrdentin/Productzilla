import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

function writeLog(message: string) {
    const now = new Date();
    const timestamp = `${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}_${now.getMonth() + 1}_${now.getDate()}_${now.getFullYear()}`;
    const logFileName = path.join('logs', `${timestamp}.log`);

    fs.mkdir('logs', { recursive: true }, (error) => {
        if (error) {
            console.error(`Gagal membuat folder log: ${error}`);
            return;
        }

        fs.appendFile(logFileName, `${new Date().toISOString()} - ${message}\n`, 'utf8', (error) => {
            if (error) {
                console.error(`Gagal menulis log: ${error}`);
            } else {
                console.log(`Log ditulis ke file: ${logFileName}`);
            }
        });
    });
}

function encrypt(text: string, password: string): string {
    const algorithm = 'aes-192-cbc';
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ":" + encrypted;
}

function decrypt(encryptedText: string, password: string): string {
    const algorithm = 'aes-192-cbc';
    const key = crypto.scryptSync(password, 'salt', 24);

    const parts = encryptedText.split(":");
    const iv = Buffer.from(parts.shift()!, 'hex');
    const encrypted = parts.join(":");

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

function encryptFile(filePath: string, password: string) {
    writeLog(`Mulai mengenkripsi file ${filePath}`);
    fs.access(filePath, fs.constants.F_OK, (error) => {
        if (error) {
            console.error(`Error: File tidak ditemukan: ${filePath}`);
            writeLog(`Error: File tidak ditemukan: ${filePath}`);
            return;
        }

        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                console.error('Error:', error.message);
                writeLog(`Error ketika mengenkripsi file: ${error.message}`);
                return;
            }

            const encryptedData = encrypt(data, password);
            const encryptedFilePath = path.join(path.dirname(filePath), `${path.basename(filePath, '.txt')}_encrypted.txt`);

            fs.writeFile(encryptedFilePath, encryptedData, 'utf8', (error) => {
                if (error) {
                    console.error('Error:', error.message);
                    writeLog(`Error ketika mengenkripsi file: ${error.message}`);
                } else {
                    writeLog(`Berhasil mengenkripsi file ${filePath} menjadi ${encryptedFilePath}`);
                    console.log(`File '${filePath}' berhasil dienkripsi menjadi '${encryptedFilePath}'`);
                }
            });
        });
    });
}

function decryptFile(filePath: string, password: string) {
    writeLog(`Mulai mendekripsi file ${filePath}`);
    fs.access(filePath, fs.constants.F_OK, (error) => {
        if (error) {
            console.error(`Error: File tidak ditemukan: ${filePath}`);
            writeLog(`Error: File tidak ditemukan: ${filePath}`);
            return;
        }

        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                console.error('Error:', error.message);
                writeLog(`Error ketika mendekripsi file: ${error.message}`);
                return;
            }

            try {
                const decryptedData = decrypt(data, password);
                const decryptedFilePath = path.join(path.dirname(filePath), `${path.basename(filePath, '_encrypted.txt')}_decrypted.txt`);

                fs.writeFile(decryptedFilePath, decryptedData, 'utf8', (error) => {
                    if (error) {
                        console.error('Error:', error.message);
                        writeLog(`Error ketika mendekripsi file: ${error.message}`);
                    } else {
                        writeLog(`Berhasil mendekripsi file ${filePath} menjadi ${decryptedFilePath}`);
                        console.log(`File '${filePath}' berhasil didekripsi menjadi '${decryptedFilePath}'`);
                    }
                });
            } catch (err) {
                console.error('Error: Password yang dimasukkan salah.');
                writeLog(`Error: Password yang dimasukkan salah.`);
            }
        });
    });
}

async function main() {
    const [,, action, filePath, password] = process.argv;

    if (action === 'encrypt' && filePath && password) {
        encryptFile(filePath, password);
    } else if (action === 'decrypt' && filePath && password) {
        decryptFile(filePath, password);
    } else {
        console.log('Penggunaan: ts-node index.js <encrypt|decrypt> <filePath> <password>');
    }
}

main();
