import styled from "styled-components";

const DivCard = styled.div`
   border: 1px solid #b5b5b5;
   border-radius: 5px;
   width: 250px;
   color: white;
   background-color: #161626; 
`;

const DivData = styled.div`
   padding-left: 1rem;
   padding-rigth: 1rem;
   padding-bottom: 1rem;
`;

const Name = styled.h2`
   font-size: x-large;
   position: relative;
   top: -3rem;
   margin:.2rem;
   width: 70%;
   padding: .2rem;
   background-color: rgba(67, 56,202, 0.85);
   color:white;
`;

const InfoText = styled.p`
   font-size: 11pt;
   line-height: 1em;
`;

const DivImg = styled.div`
   position:relative;
   top:-26px;
   height:250px;
`;

const Img = styled.img`
   width: 100%;
   border-radius: 5px 5px 0 0;
   position: relative;
   top: -1px;
`;

const ButtonClose = styled.button`
   position: relative;
   top: 25px;
   right: -210px;
   z-index:1;
   color: white;
   border:0;
   border-radius: 3px;
   background-color: #850e0e;
   box-shadow: black 1px 1px 5px;
   cursor: pointer;
   heigth: 26px;
   width: 26px;

`;



export default function Card({ onClose, name, status, species, gender,origin, image, id }) {
   return (
      <DivCard>
         <DivImg> 
            <ButtonClose onClick={() => onClose(id)}>X</ButtonClose>
            <Img src={image} alt='' />
            <Name> {name} </Name>
         </DivImg>  
         <DivData>
            <InfoText>{status}</InfoText>
            <InfoText>{species}</InfoText>
            <InfoText>{gender}</InfoText>
            <InfoText>{origin}</InfoText>
         </DivData>
      </DivCard>
   );
}
