import styled from 'styled-components'

export const HomeStyle = styled.section`
:root {
    --font: 'Lato', sans-serif;
    --color1: #00001a;
    --color3: #009b7e;
    --color4: #bbdec6;
    --color5: #f7f8fc;
}

body {
    background: var(--color1);
    color: var(--color4);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin: 0;
    min-height: 100vh;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.formula1, .problema, .solucao, .comparacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 800px; 
    margin: 20px auto;
}

.formula1 img.formula,
.problema img,
.solucao img,
.comparacao img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 10px 8px rgba(123, 123, 123, 0.237);
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info img.icon {
    padding: 1rem;
    margin: 10px 0;
}

.problema p,
.solucao p,
.comparacao p {
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
}

.problema span,
.solucao span,
.comparacao span {
    text-align: center;
    margin-bottom: 20px;
}

button {
    margin: 2rem;
    margin-top: 1rem;
    padding: 10px 20px;
    background-color: var(--color3);
    color: var(--color5);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    max-width: 200px;
    text-align: center;
}

button:hover {
    background-color: var(--color4);
    color: var(--color1);
}

/* Responsividade */
@media screen and (max-width: 768px) {
    .formula1,
    .problema,
    .solucao,
    .comparacao {
        padding: 10px;
        margin: 10px 0;
    }

    .info img.icon {
        margin: 5px 0;
    }
}
`