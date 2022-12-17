import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {      
      duration: 1,
      ease: 'easeInOut'
    }
  }
}                                                                                                                                    

const Header = () => {

  const [code, setCode] = React.useState(
    `var initHttpServer = () => {
      var app = express();
      app.use(bodyParser.json());
  
      app.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)));
      app.post('/mineBlock', (req, res) => {
          var newBlock = generateNextBlock(req.body.data);
          addBlock(newBlock);
          broadcast(responseLatestMsg());
          console.log('block added: ' + JSON.stringify(newBlock));
          res.send();
      });
      app.get('/peers', (req, res) => {
          res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
      });
      app.post('/addPeer', (req, res) => {
          connectToPeers([req.body.peer]);
          res.send();
      });
      app.listen(http_port, () => console.log('Listening http on port: ' + http_port));
  };`
  );

  return (
    <div className='app__header app__flex'>
      
      <video id="background-video" className='videoTag' autoPlay loop muted>
        <source src={images.animatedBg2} type='video/mp4' />
      </video>

      <div className='app__code'>
      <CodeEditor
            value={code}
            language="js"
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 15,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
            
          />
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='tag-cmp app__flex'>
          
            <p className='p-text'>
              <TypeAnimation 
                sequence={[
                  'Hello my name is Asylhan and I am a Software Developer', 1000,
                  'Hello my name is Asylhan and I am a Web Developer', 1000
                ]}
                speed={10}
              /></p>
          </div>
        </div>
      </motion.div>
          
        
    </div>
  )
}

export default AppWrap(Header, 'home')
