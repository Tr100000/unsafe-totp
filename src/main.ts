import * as Auth from "otpauth";

const secretInput = document.getElementById("secret") as HTMLInputElement;
const tokenText = document.getElementById("token") as HTMLParagraphElement;

const totp = new Auth.TOTP({
    algorithm: "SHA1",
    digits: 6,
    period: 30
});

function generateToken() {
    totp.secret = Auth.Secret.fromBase32(secretInput.value);
    tokenText.innerHTML = totp.generate();
}

setInterval(generateToken, 500);
