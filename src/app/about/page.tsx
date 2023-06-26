import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <main className={styles.main}>
      <div style={{
        textAlign: 'center'
      }}>
        <pre
          style={{
            whiteSpace: "break-spaces",
            fontSize: "14px",
            textAlign: "left"
          }}
        >
          Hello I am Min Min Latt (ミンミンラット).
          I used to create tech stuff and fix bug 🪲 by reading documentation 📑 and following fair discussions 🗣️.
          My background is <b>Electronics Engineering</b>.
          That`s why sometime I can`t caught what is Agile Project Management.
          But don`t worry I will caught it up as long as I have the Internet.
          I do not hesitate to ask or search for what I don`t know yet.

          I am also familiar with IoT such as Arduino, Raspberry Pi, Jetson Nano and ESP devices and most favorite one is Raspberry Pi.
          ESPs follows second. Past, I have created IoT things.
          One of time consuming is 8x8x8 LED cube which has 512 LEDs and  about 1,500 wire connections in total and
          I soldered them by following tutorials. After that I believe, I can solder very well 😂 than teaching from the University.
          Just kidding.


          I like Linux and Unix-like operating systems and I have failed to use Linux 4 times.
          I have installed Linux and don`t know what I am doing and switched back to Windows and I count it as fail state.
          I think I have basic knowledge of Linux like “everything is a file in Linux” after about 5 years daily using it.
          I do not hack or break other things, I just want to create things but not to be breaking.
          Saying that I also don`t want to be break my feature that`s why I care about validations, security and errors.
          I don`t afraid or hate errors, I love them because they shows me what to do next.



          I like Maths and favorite person is Tom Scott from UK.
          This is one of my favorites of  his videos.
          I also have some background knowledge with Machine Learning and Computer Vision.
          Let`s say an image with 64x64 pixels, is composed of 3 layers RGB and each layer has 4096.
          So a tiny 64x64 pixel RGB image has 12,288 math values to be a meaningful image.
          If we grey scaled it, what will happen by then ? 😅
          For machine learning, hypothesis functions are kind of like f(x) = y and like 99% is better than 100% that&apos;s we need a bias.
          Because there`s no 100% correct prediction.
          I have finished one coursera course by AndrewNg about machine learning and two computer visions courses.



          I also know some guitar 🎸 chords but cannot play very well 😂.
          Sometime I feel that I got fewer option when I don`t have a PC.
          I used to keep Raspberry Pi Zero Computer in my pocket.
          But now I have sort of small Cloud Server and I connect it from Termux.
          In my free times, I used to watch Computerphile and Numberphile Channel from YouTube.
          Like n⁰ = 1 and 0^n = 0, what if 0⁰? I also read Tech News everyday, from that I think I get some idea 💡to do better things.



          Also I like Oprea and Rock music, sometime Eminem Rap.
          But all music have their own attracted attributes.
          I like Oliva and Ariana Grande and also Mary who is Myanmar singer and many others.
          I like 君の名前は (kimino namae wa) very much, even almost crying 😢.



          Now, two of my interested things are Validations and System design.
          Sometime, I do not speak very much but I respect what the others said.

          Not to mention that I am from Myanmar who cares more about errors and validations than features.

          Nice to meet you all, thank you for reading to the end.
        </pre>
      </div>

      <div className={styles.description}>
        <p>
          <span>
            <Link href="/">
              home
              &nbsp;
              <code className={styles.code}>/about</code>
            </Link>
          </span>
        </p>
      </div>
    </main>
  )
}
