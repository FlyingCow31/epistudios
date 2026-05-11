"use client";


import { useEffect } from "react";
import Script from "next/script";
import Navbar from "@/app/components/Navbar";

export default function TrustpilotWidget() {
    useEffect(() => {
        if (window.Trustpilot) {
            window.Trustpilot.loadFromElement(
                document.querySelector(".trustpilot-widget")
            );
        }
    }, []);

    return (
        <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="69bb08b17433d98fcace8237"
            data-style-height="52px"
            data-style-width="100%"
            data-token="1818af44-b707-4f9d-911d-1ffb8e57e657"

        >
            <Script
                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                strategy="afterInteractive"
            />
            <a href="https://www.trustpilot.com/review/epistudios.fr" target="_blank" rel="noopener">
                Trustpilot
            </a>
        </div>
    );
}