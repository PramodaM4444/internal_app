import React from 'react';

export const Button: React.FC<any> = ({ text, handleClick }: {text: string, handleClick: any}) => (
    <button onClick={handleClick}>{text}</button>
);
