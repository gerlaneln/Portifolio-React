import './App.css';
import React from 'react';
import { Dialog } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ScrollSpy from "react-ui-scrollspy";
import jobsnet from './img/jobsnet.png';
import * as mdb from 'mdb-ui-kit';
// npm i mdb-ui-kit

function App() {

  function SimpleDialog(props){
    const{ onClose, selectValue, open } = props;

    const handleClose = () => { onClose() };

    switch(selectValue){
      case 1:
        return (
          <Dialog onClose={handleClose} open={open}>
            <div className="container-proj">
              <p>Primeiro projeto feito com React, desenvolvido como parte da avaliação final do <b>curso full stack da Gama Academy. </b>
              </p><p>Foi implementado: API de busca de CEP (com preenchimento de campos), cadastro único de CPF, validação de campos, cadastro em banco de dados MongoDB.</p>
              <p>Tecnologias e linguagens utilizadas: HTML, CSS, Java Script, React, NodeJS, MongoDB.</p>
              <a href="https://github.com/gerlaneln/proj-gama-git" target="_blank" rel="noreferrer">Repositório</a> | <a href="https://boring-joliot-e666a5.netlify.app/" target="_blank" rel="noreferrer">Front end</a>
              <p className="footnote">Front end hospedado de forma gratuita, alguns links podem não funcionar. Qualquer problema reporte por e-mail.</p>
            </div>
          </Dialog>
        );
      case 2:
        return (
          <Dialog onClose={handleClose} open={open}>
            <div className="container-proj">
              <p>BJKSAUJAJDJKSDesenvolvido como parte da avaliação final do <b>curso full stack da Gama Academy. </b>
              Primeiro projeto feito com React. Foi implementado: API de busca de CEP (com preenchimento de campos), cadastro único de CPF, validação de campos, cadastro em banco de dados MongoDB.</p>
              <p><a>Repositório</a> | <a>Front end</a></p>
              <p>Front end hospedado de forma gratuita, alguns links podem não funcionar. Qualquer problema reporte por e-mail.</p>
            </div>
          </Dialog>
        );
    }


    
  }

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
      setOpen(true);
      setSelectedValue(selectedValue);
    }

    const handleClose = () => {
      setOpen(false);
    }

  // function aboutMe(evt, item) {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByclassNameName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByclassNameName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].classNameName = tablinks[i].classNameName.replace("active", "");
  //   }
  //   document.getElementById(item).style.display = "block";
  //   evt.currentTarget.classNameName += " active";
  // }

  return (
    <>
      {/* <div className='' class="sidenav" data-mdb-right="true">
        <ul class="sidenav-menu">
          <li class="sidenav-item">
            <a class="sidenav-link">
              <i class="far fa-smile fa-fw me-3"></i><span>Link 1</span></a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link"><i class="fas fa-grin fa-fw me-3"></i><span>Category 1</span></a>
            <ul class="sidenav-collapse show">
              <li class="sidenav-item">
                <a class="sidenav-link">Link 2</a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link">Link 3</a>
              </li>
            </ul>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link"><i class="fas fa-grin-wink fa-fw me-3"></i><span>Category
              2</span></a>
            <ul class="sidenav-collapse">
              <li class="sidenav-item">
                <a class="sidenav-link">Link 4</a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link">Link 5</a>
              </li>
            </ul>
          </li>
        </ul>
        <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
          aria-controls="#sidenav-1" aria-haspopup="true">
          <i class="fas fa-bars"></i>
        </button>
      </div> */}
      <nav className='navbar'>
        <ul id="menu">
          <li data-to-scrollspy-id="home">
            <a href="#home">
              Início
            </a>
          </li>
          <li data-to-scrollspy-id="about">
            <a href="#about">
              Sobre Mim
            </a>
          </li>
          <li data-to-scrollspy-id="projects">
            <a href="#projects">
              Projetos
            </a>
          </li>
          <li data-to-scrollspy-id="contact">
            <a href="#contact">
              Contato
            </a>
          </li>
          <li data-to-scrollspy-id="credit">
            <a href="#credit">
              Créditos
            </a>
          </li>
        </ul>
      </nav>

      <main>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <section id='home' className='home'>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="content">
            <h1 className="hide">Olá, meu nome é Gerlâne</h1>
            <p className="hide">e esse é o meu portifólio</p>
          </div>
        </section>

        <section id='about' className='about'>
          <div id="about-myself" className="content">
            <div id='section-content'>
              {/* <h1>Sobre mim</h1> */}

              {/* <div className="tab">
              <button className="tablinks" onclick="window.location.href='#formacao';">Formação</button>
              <button className="tablinks">Qualificações</button>
              <button className="tablinks">Interesses</button>
              </div> */}

              <div className="aboutMeContent">
                <div id="formacao">
                  <p>Formada com honras como Bacharela em Sistemas de Informação,
                    pela Universidade Federal do Acre em 2017. Trabalho de Conclusão de
                    Curso 'Avaliação de Comunicabilidade no Ambiente Virtual de Aprendizagem
                    da Universidade Federal do Acre' pode ser lido
                    <a href="https://drive.google.com/file/d/1zewNSrv3oDyFIjkTxYgs39SFdJDsXwEH/view?usp=sharing"
                      target="_blank" className="tcc"> aqui.</a></p>
                </div>

                <div id="qualificacoes">
                  <p>— Treinamento em desenvolvimento Full Stack - Gama Academy, 120h, 2021.</p>
                  <p>— Responsive Web Design - freeCodeCamp, 300h, 2021.</p>
                  <p>— Especialização em Marketing e Publicidade - Universidade da Amazônia, cursando.</p>
                  <p>— CorelDRAW X7 - Escola Aberta de Informática/SENAC, 30h, 2020.</p>
                  <p>— Adobe Photoshop CC - Escola Aberta de Informática/SENAC, 40h, 2019.</p>
                  <p>— Treinamento em Marketing Digital - Instituto Euvaldo Lodi IEL/NR-AC, 12h, 2019.</p>
                  <p>— Inglês - Centro de Estudo de Línguas do Estado do Acre, 2018 - 2019.</p>
                  <p>— Francês - Centro de Estudo de Línguas do Estado do Acre, 2015 - 2018.</p>
                  <p>— Bacharelado em Sistemas de Informação - Universidade Federal do Acre, 2013 - 2017.</p>
                </div>

                <div id="interesses">
                  <p>— Desenvolvimento front end.</p>
                  <p>— Desenvolvimento web responsivo.</p>
                  <p>— UX/UI.</p>
                  <p>— Comunicabilidade e usabilidade de interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='projects' className='projects'>
        <div id='section-content'>
        {/* <h1>Projetos</h1> */}
          <div className="proj-cards">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="JobsNET"
                height="140"
                image={jobsnet}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cadastro de Currículos - JobsNET
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpen}>Mais</Button>
                <SimpleDialog selectValue={1} open={open} onClose={handleClose} />
              </CardActions>
            </Card>
          </div>
          <div className="proj-cards">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="JobsNET"
                height="140"
                image={jobsnet}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Cadastro de Currículos - JobsNET
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpen}>Mais</Button>
                <SimpleDialog selectValue={1} open={open} onClose={handleClose} />
              </CardActions>
            </Card>
            {/* <h3>
              <button className="moreBtn" onClick={handleClickOpen}><AddCircleOutlineIcon /></button></h3>
            <SimpleDialog selectValue={1} open={open} onClose={handleClose} />
            <img src={jobsnet} alt="JobsNET" className="img-proj" /> */}
          </div>
          </div>
        </section>

        <section id='contact' className='contact'>
          <div id='section-content'>
            {/* <h1>Contato</h1> */}
            <div className="grid" id="contatoDiv">
              <div className="grid-item">
                <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg" alt="freecodecamp"/>
                  <div className="txt">
                    <p>freeCodeCamp</p>
                    <p id="dsc">Certificações frontend</p>
                  </div>
                  <a className="btn" href="https://www.freecodecamp.org/gerlaneln" target="_blank">
                    <p><span className="decor">/</span>gerlaneln</p>
                  </a>
              </div>

              <div className="grid-item">
                <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="codepen"/>
                  <div className="txt">
                    <p>codepen</p>
                    <p id="dsc">Portifólio de códigos</p>
                  </div>
                  <a className="btn" href="https://codepen.io/gerlima96" target="_blank">
                    <p><span className="decor">/</span>gerlane96</p>
                  </a>
              </div>

              <div className="grid-item">
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="linkedin"/>
                  <div className="txt">
                    <p>LinkedIn</p>
                    <p id="dsc">Perfil profissional</p>
                  </div>
                  <a className="btn" href="www.linkedin.com/in/gerlaneln" target="_blank">
                    <p><span className="decor">/</span>gerlaneln</p>
                  </a>
              </div>

              <div className="grid-item">
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github"/>
                  <div className="txt">
                    <p>GitHub</p>
                    <p id="dsc">Repositório pessoal</p>
                  </div>
                  <a className="btn" href="https://github.com/gerlaneln" target="_blank">
                    <p><span className="decor">/</span>gerlaneln</p>
                  </a>
              </div>

              <div className="grid-item">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="gmail"/>
                  <div className="txt">
                    <p>Gmail</p>
                    <p id="dsc">E-mail profissional</p>
                  </div>
                  <a className="btn" href="mailto:gerlima96@gmail.com" target="_blank">
                    <p><span className="decor">/</span>gerlima96</p>
                  </a>
              </div>
            </div>
          </div>
        </section>

        <section id='credit' className='credit'>
          <div id='section-content'>
            {/* <h1>Créditos</h1> */}
            <p>Todo o conteúdo que não desenvolvido por mim, foi retirado de fontes open source.</p>
            <p>Estão sendo devidamente creditadas de acordo com suas políticas de uso.</p>
            <p>Ícones:
              <a href="https://icons8.com/icon/set/popular/material-outlined">
                Icons8
              </a>
            </p>
            <table>
              <tr>
                <td><img className="img-crd" src="https://img.icons8.com/material-outlined/48/000000/home--v2.png" /></td>
                <td><a href="https://icons8.com/icon/83326/home">Home icon by Icons8</a></td>
              </tr>
              <tr>
                <td><img className="img-crd" src="https://img.icons8.com/material-outlined/24/000000/info.png" /></td>
                <td><a href="https://icons8.com/icon/82742/info">Info icon by Icons8</a></td>
              </tr>
              <tr>
                <td><img className="img-crd" src="https://img.icons8.com/material-outlined/24/000000/folder-invoices.png" /></td>
                <td><a href="https://icons8.com/icon/82790/folder">Folder icon by Icons8</a></td>
              </tr>
              <tr>
                <td><img className="img-crd" src="https://img.icons8.com/material-outlined/24/000000/contacts.png" /></td>
                <td><a href="https://icons8.com/icon/85011/contacts">Contacts icon by Icons8</a></td>
              </tr>
              <tr>
                <td><img className="img-crd" src="https://img.icons8.com/material-outlined/24/000000/toolbox.png" /></td>
                <td><a href="https://icons8.com/icon/82543/toolbox">Toolbox icon by Icons8</a></td>
              </tr>
            </table>
          </div>
        </section>
      </ScrollSpy>
      </main>
    </>
  );
}

export default App;
