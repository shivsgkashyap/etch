import React from "react";
import github from "../images/github.png";

export default function Footer() {
  return (
    <footer class="footer">
      <p>Copyright © {new Date().getFullYear()} Shiv Kashyap</p>
      <a href="https://github.com/" target="_blank">
        <img src={github} alt="Github Logo" />
      </a>
    </footer>
  );
}
