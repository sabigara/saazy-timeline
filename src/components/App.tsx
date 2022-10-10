import styles from "./App.module.scss";
import Steps from "./Steps";

function App() {
  return (
    <div className={styles.container}>
      <Steps
        items={[
          {
            title: "This is the first step.",
            description:
              "Lorem ipsum dolor sincit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            features: ["Supported feature", "Another one"],
            imgSrc: "/image-1.png",
          },
          {
            title: "Second step must be done.",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            features: ["Supported feature", "Another one"],
            imgSrc: "/image-2.png",
          },
          {
            title: "And finally the last one.",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            features: ["Supported feature", "Another one"],
            imgSrc: "/image-3.png",
          },
        ]}
      />
    </div>
  );
}

export default App;
