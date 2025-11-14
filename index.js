'use strict';

const prompt = require("prompt-sync")({ sigint: true });

/* =====================================================
   1. VALIDASI INPUT ANGKA
===================================================== */
function getValidNumberInput(promptMessage) {
  let value = prompt(promptMessage);

  while (true) {
    const numberValue = Number(value);

    if (!isNaN(numberValue)) {
      return numberValue;
    }

    value = prompt("❌ Input tidak valid! Masukkan angka lagi: ");
  }
}

/* =====================================================
   2. VALIDASI OPERATOR
===================================================== */
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let op = prompt(promptMessage);

  while (!validOperators.includes(op)) {
    op = prompt("❌ Operator tidak valid! Masukkan salah satu (+, -, *, /, %, **): ");
  }

  return op;
}

/* =====================================================
   3. OPERASI ARITMATIKA
===================================================== */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

/* =====================================================
   4. MAIN PROGRAM (While Loop)
===================================================== */

while (true) {
  console.log("\n====================================");
  console.log("        📟 ADVANCED CLI CALCULATOR");
  console.log("====================================");

  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  let result;

  switch (operator) {
    case "+": result = add(num1, num2); break;
    case "-": result = subtract(num1, num2); break;
    case "*": result = multiply(num1, num2); break;
    case "/": result = divide(num1, num2); break;
    case "%": result = modulo(num1, num2); break;
    case "**": result = power(num1, num2); break;
  }

  console.log("\n====================================");
  console.log(`🔢 Hasil: ${num1} ${operator} ${num2} = ${result}`);
  console.log("====================================");

  /* =====================================================
     5. DATA TYPE ANALYSIS
  ====================================================== */
  console.log("\n📌 ANALISA TIPE DATA & NILAI:");

  const type = typeof result;
  console.log(`Tipe data hasil: ${type}`);

  // Jika hasil string (contohnya error)
  if (type === "string") {
    console.log("⚠️ Error terdeteksi:", result);
  }

  // Jika hasil number
  else if (type === "number") {
    // Positive / Negative / Zero
    if (result > 0) {
      console.log("➡️ Angka positif");
    } else if (result < 0) {
      console.log("➡️ Angka negatif");
    } else {
      console.log("➡️ Angka nol");
    }

    // Integer atau Float
    console.log(Number.isInteger(result) 
      ? "🔢 Hasil adalah Integer" 
      : "🔢 Hasil adalah Floating point");

    // Even / Odd (hanya untuk integer)
    const evenOdd = Number.isInteger(result)
      ? (result % 2 === 0 ? "Even" : "Odd")
      : "Tidak dapat ditentukan (bukan integer)";
    console.log("🟦 Karakteristik:", evenOdd);

    // Contoh penggunaan AND && dan OR ||
    if (result > 0 && result % 2 === 0) {
      console.log("✔ Hasil adalah POSITIF dan GENAP (menggunakan &&)");
    }

    if (result < 0 || result === 0) {
      console.log("✔ Hasil NEGATIF atau NOL (menggunakan ||)");
    }
  }

  // Jika null atau undefined (jarang terjadi)
  else {
    const safeValue = result ?? "Result is undefined or null, something went wrong!";
    console.log("⚠️", safeValue);
  }

  /* =====================================================
     6. EXIT MECHANISM
  ====================================================== */
  const again = prompt("\nApakah ingin menghitung lagi? (yes/no): ").toLowerCase();

  if (again === "no") {
    console.log("\n👋 Program berhenti. Terima kasih!");
    break;
  }
}

