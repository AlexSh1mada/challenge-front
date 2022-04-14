
import React from 'react';
import './App.css';
import Modal from './components/modal'
import Cities from './cities-json.json'
import styled from 'styled-components';
import { FooterContainer } from './containers/footer'


export default function App() {

	return (
		
    
    <div className='App'>

	<br />
      <div className='page-title'><strong>Our Gallery</strong></div>
      <br />
       {/**Modal 1 */}
      <ButtonContainer>
				<Image>Image 1</Image>
			</ButtonContainer>

			<br />
			<Modal />
			
			
      
      <div className="inner">
        {
          Cities && Cities.map( city => {
            return(
              <div className="box">
                <img src  = { city.source } alt = "" />

                <br />

                { city.title }

              </div>
            )
          })
        }
      </div>
	{/* <>
   	 <FooterContainer />
   	</> */}
    </div>
	
	
  )
}

const ButtonContainer = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Image = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

// const Contenido = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	h1 {
// 		font-size: 42px;
// 		font-weight: 700;
// 		margin-bottom: 10px;
// 	}
// 	p {
// 		font-size: 18px;
// 		margin-bottom: 20px;
// 	}
// 	img {
// 		width: 100%;
// 		vertical-align: top;
// 		border-radius: 3px;
// 	}
// `;
