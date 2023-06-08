import React from "react";

type HeaderProps = {
    title: String;
    subtitle: String;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    );
};

export default Header;