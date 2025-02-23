import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Footer from "../../src/components/Footer";
import { socialMediaLinks, footerLinks } from "../../src/data/footerContent";

describe("Footer Component", () => {
  it("renders the logo with correct alt text", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/explore singapore/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Footer />);
    const description = screen.getByText(
      /discover the beauty of singapore through curated itineraries/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders all social media links", () => {
    render(<Footer />);
    socialMediaLinks.forEach((item) => {
      const socialLink = screen.getByLabelText(new RegExp(item.label, "i"));
      expect(socialLink).toBeInTheDocument();
      expect(socialLink).toHaveAttribute("href", item.href);
    });
  });

  it("renders all footer navigation sections with their links", () => {
    render(<Footer />);
    footerLinks.forEach((section) => {
      const sectionTitle = screen.getByText(new RegExp(section.title, "i"));
      expect(sectionTitle).toBeInTheDocument();

      section.links.forEach((link) => {
        const linkElement = screen.getByText(new RegExp(link.label, "i"));
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
      });
    });
  });

  it("displays the correct copyright text with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(
        `© ${currentYear} explore singapore\\. all rights reserved\\.`,
        "i",
      ),
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
