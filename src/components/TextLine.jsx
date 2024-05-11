import Typewriter from "typewriter-effect";

function TextLine() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Programer",
          "I'm a Freelancer",
          "I want a Fullstack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TextLine;
