console.log("================================");
console.log("🚀 Live Preview Test Started");
console.log("================================");

// 1. Basic console tests
console.log("✅ Console log working");
console.info("ℹ️ Console info working");
console.warn("⚠️ Console warning working");

// 2. Variables
const name = "Anush";
const age = 22;
const isDeveloper = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Developer:", isDeveloper);

// 3. Array
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java"
];

console.log("Skills:", skills);
console.log("Number of skills:", skills.length);

// 4. Object
const user = {
    name: "Anush",
    role: "Developer",
    experience: "Fresher"
};

console.log("User:", user);

// 5. Function
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log("10 + 20 =", result);

// 6. DOM test
const button = document.getElementById("testButton");
const output = document.getElementById("output");

if (button && output) {
    button.addEventListener("click", () => {
        output.textContent = "JavaScript is working successfully!";

        console.log("🖱️ Button clicked");
        console.log("✅ DOM manipulation working");
    });

    console.log("✅ DOM elements detected");
} else {
    console.log("ℹ️ Test button/output not found");
}

// 7. localStorage test
try {
    localStorage.setItem("livePreviewTest", "Working");

    const storedValue = localStorage.getItem("livePreviewTest");

    console.log("💾 localStorage:", storedValue);
} catch (error) {
    console.log("ℹ️ localStorage is not available in this environment");
}

// 8. setTimeout test
setTimeout(() => {
    console.log("⏱️ setTimeout working");
}, 2000);

// 9. Promise test
Promise.resolve("Promise working")
    .then((message) => {
        console.log("🔄", message);
    });

// 10. Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log("Original array:", numbers);
console.log("Doubled array:", doubled);

// 11. Date
const currentTime = new Date();

console.log("🕒 Current time:", currentTime.toLocaleTimeString());

// 12. Small interval test
let count = 0;

const timer = setInterval(() => {
    count++;

    console.log(`⏳ Timer: ${count}`);

    if (count >= 3) {
        clearInterval(timer);
        console.log("✅ Timer completed");
    }
}, 1000);

// Final message
console.log("================================");
console.log("✅ All JavaScript tests loaded");
console.log("================================");