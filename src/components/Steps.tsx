import React from "react";
import { ReactComponent as CheckSvg } from "../assets/check.svg";
import { ReactComponent as ArrowRightSvg } from "../assets/arrow-right.svg";

import styles from "./Steps.module.scss";

type Step = {
  title: string;
  description: string;
  imgSrc: string;
  features: string[];
};

type Props = {
  items: Step[];
};

export default function Steps({ items }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        {items.map((item, i) => (
          <div>{getContentFromStep(item, i, true)}</div>
        ))}
      </div>
      <div className={styles.timeline}>
        {Array(items.length)
          .fill(0)
          .map((i) => (
            <div key={i} className={styles.timeline__item}>
              <div className={styles.timeline__circle} />
              <div className={styles.timeline__line} />
            </div>
          ))}
        <div className={styles.timeline__circle} />
      </div>
      <div className={styles.column}>
        {items.map((item, i) => (
          <div>{getContentFromStep(item, i, false)}</div>
        ))}
      </div>
    </section>
  );
}

function isEven(num: number) {
  return num % 2 === 0;
}

function getContentFromStep(step: Step, index: number, isLeft: boolean) {
  if (isLeft) {
    return isEven(index) ? (
      <StepItemTexts step={step} />
    ) : (
      <StepItemImage step={step} />
    );
  } else {
    return isEven(index) ? (
      <StepItemImage step={step} />
    ) : (
      <StepItemTexts step={step} />
    );
  }
}

type ItemProps = {
  step: Step;
};

function StepItemTexts({ step }: ItemProps) {
  return (
    <div className={styles.texts__container}>
      <h2 className={styles.texts__title}>{step.title}</h2>
      <p className={styles.texts__description}>{step.description}</p>
      <ul className={styles.feature__list}>
        {step.features.map((feature) => (
          <li className={styles.feature__item}>
            <span className={styles.feature__check}>
              <CheckSvg />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={styles.learnHowBtn}>
        <span>Learn how</span>
        <ArrowRightSvg />
      </button>
    </div>
  );
}

function StepItemImage({ step }: ItemProps) {
  return <img src={step.imgSrc} className={styles.image} />;
}
