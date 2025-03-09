import React from "react"
import { Container } from "react-bootstrap";

class Footer extends React.Component{
  render(){
    return(
      <footer 
    style={{ 
      backgroundColor: '#4a2c2a',
      color: '#f8f5f2',
      padding: '2rem 0',
      marginTop: 'auto'
    }}
  >
    <Container>
      <div className="text-center">
        <h5 style={{ fontFamily: 'Georgia, serif' }}>Чайная Лавка</h5>
        <div className="mt-3">
          <a 
            href="#terms" 
            style={{ color: '#d3c1b2', textDecoration: 'none', margin: '0 1rem' }}
          >
            Условия использования
          </a>
          <a 
            href="#privacy" 
            style={{ color: '#d3c1b2', textDecoration: 'none', margin: '0 1rem' }}
          >
            Конфиденциальность
          </a>
        </div>
        <p className="mt-3" style={{ fontFamily: 'Georgia, serif' }}>
          © 2025 Все права защищены
        </p>
      </div>
    </Container>
  </footer>
    )
  }
}

export default Footer