import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

describe("Navbar Component", () => {
  it("renders all navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const navLinks = ["Home", "Itinerary", "Explore", "Calendar"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("toggles mobile menu button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const menuButton = screen.getByRole("button", { name: /open main menu/i });
    fireEvent.click(menuButton);

    const closeButton = screen.getByRole("button", { name: /open main menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("renders profile dropdown menu", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const profileButton = screen.getByRole("button", {
      name: /open user menu/i,
    });
    fireEvent.click(profileButton);

    const profileLink = screen.getByText(/your profile/i);
    const settingsLink = screen.getByText(/settings/i);
    const signOutLink = screen.getByText(/sign out/i);

    expect(profileLink).toBeInTheDocument();
    expect(settingsLink).toBeInTheDocument();
    expect(signOutLink).toBeInTheDocument();
  });
});
