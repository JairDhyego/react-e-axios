import styled from "styled-components";




export const SNewPost = styled.div`
 h2 {
  text-align: center;
  margin-bottom: 1rem;
}

form {
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-control label {
  margin-bottom: 0.5rem;
}


.form-control input,
.form-control textarea {
  padding: .5rem;
  border-radius: 5px;
  border: none;
}

.btn {
    background-color: #fff;
    color: #0e1217;
    border: 1px solid #fff;
    opacity: 1;
    padding: .5rem 1rem;
    border-radius: 1rem;
    max-width: 100px;
    text-align: center;
    cursor: pointer;
    transition: .3s;
}
`;