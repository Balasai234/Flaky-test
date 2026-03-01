// flaky-test.js

if (Math.random() > 0.5) {
  console.log("Test Passed");
  process.exit(0);
} else {
  console.log("Test Failed");
  process.exit(1);
}
