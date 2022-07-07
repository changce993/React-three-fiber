import React, { useState } from 'react';
import styles from './styles.module.css';
import Tetris from '../../scenes/tetris'
import Box from '../../scenes/box'
import Shader from '../../scenes/shader'

const Index = () => {
  const [ isClicked, setIsClicked ] = useState(false);
  return (
    <div>
      <div className={`${styles.container}`}>
        <section onClick={() => setIsClicked(!isClicked)}>Click me!!</section>
        <section className="canvas">
          <Tetris isClicked={isClicked}/>
        </section>
      </div>

      <main className={styles.main}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Diam sit amet nisl suscipit. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Turpis in eu mi bibendum neque egestas congue quisque egestas. Adipiscing bibendum est ultricies integer quis auctor. Nisl condimentum id venenatis a condimentum vitae. A arcu cursus vitae congue. Eget mi proin sed libero enim sed faucibus turpis in. Elementum curabitur vitae nunc sed velit. Cursus sit amet dictum sit amet justo donec enim.
        </p>

        <p>
          Ut sem viverra aliquet eget sit amet tellus. Convallis aenean et tortor at risus. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Aenean euismod elementum nisi quis eleifend. Egestas sed tempus urna et pharetra pharetra massa. Odio facilisis mauris sit amet massa vitae tortor. Sapien pellentesque habitant morbi tristique senectus et netus et. Lectus magna fringilla urna porttitor rhoncus dolor. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Eu lobortis elementum nibh tellus molestie nunc non blandit. Lobortis scelerisque fermentum dui faucibus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Nunc lobortis mattis aliquam faucibus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Arcu cursus euismod quis viverra nibh cras pulvinar. Felis eget velit aliquet sagittis id consectetur purus ut. Vitae tortor condimentum lacinia quis vel. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Varius duis at consectetur lorem donec massa. Suscipit tellus mauris a diam maecenas sed enim.
        </p>

        <section style={{ height: "80vh" }}>
          <Box isClicked={isClicked}/>
        </section>

        <p>
          Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Suscipit adipiscing bibendum est ultricies. Semper risus in hendrerit gravida rutrum quisque non tellus. Eget mi proin sed libero enim sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Congue mauris rhoncus aenean vel. Ullamcorper eget nulla facilisi etiam dignissim. Amet cursus sit amet dictum sit. Sit amet luctus venenatis lectus magna. Aliquam vestibulum morbi blandit cursus risus at. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Nam aliquam sem et tortor consequat. Eget sit amet tellus cras adipiscing enim eu turpis egestas.
        </p>

        <p>
          At consectetur lorem donec massa sapien faucibus et molestie ac. Tristique risus nec feugiat in fermentum posuere urna. Bibendum est ultricies integer quis auctor. Nisl nunc mi ipsum faucibus vitae aliquet nec. Proin libero nunc consequat interdum varius sit amet. Sed enim ut sem viverra aliquet. Nam at lectus urna duis convallis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Facilisis leo vel fringilla est. Tempor nec feugiat nisl pretium fusce id. Iaculis at erat pellentesque adipiscing commodo elit. Dignissim sodales ut eu sem. Rhoncus est pellentesque elit ullamcorper dignissim cras. Ut lectus arcu bibendum at varius vel. Volutpat odio facilisis mauris sit amet massa. Faucibus interdum posuere lorem ipsum dolor. Rhoncus aenean vel elit scelerisque mauris. Fermentum dui faucibus in ornare.
        </p>

        <section style={{ height: "80vh" }}>
          <Shader isClicked={isClicked}/>
        </section>


        <p>          Cras sed felis eget velit. Nisi porta lorem mollis aliquam ut porttitor leo a. Et molestie ac feugiat sed lectus vestibulum. At varius vel pharetra vel turpis nunc eget. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Ut ornare lectus sit amet est placerat in egestas erat. Tellus elementum sagittis vitae et leo duis. Turpis egestas sed tempus urna et pharetra pharetra massa.
        </p>

        </main>
    </div>
  )}

export default Index
