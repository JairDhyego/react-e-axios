import styled from "styled-components";


export const SHome = styled.div`
 h1 {
    text-transform: uppercase;
    text-align: center;
}

.post {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #777;
}


.post h2,
.post p {
    margin-bottom: 1rem;
}


.post h2::first-letter {
    text-transform: uppercase;
}

.btn {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid #fff;
    opacity: 1;
    padding: .5rem 1rem;
    border-radius: 1rem;
    max-width: 100px;
    text-align: center;
    cursor: pointer;
    transition: .3s;
}


.btn:hover {
    color: #fff;
    background-color: #0e1217;
}

`;