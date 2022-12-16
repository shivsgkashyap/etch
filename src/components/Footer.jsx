import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <p>Copyright © {new Date().getFullYear()} Shiv Kashyap</p>
      <a href="https://github.com/" target="_blank">
        <img src="./src/images/github.png" alt="Github Logo" />
      </a>
    </footer>
  );
}
