import React from "react";

import Text from "../text/text";
import * as Styles from "./repo-card.styles";
import Checkbox from "../checkbox/checkbox";

type Props = {
  title: string;
  description: string;
  image: string;
  selected: boolean;
  onSelected: (e: boolean) => void;
};

export default function RepoCard({
  title,
  description,
  image,
  selected,
  onSelected,
}: Props) {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.Image src={image}></Styles.Image>
        <Styles.Info>
          <Text as={"p"} bold>
            {title}
          </Text>
          <Text as={"span"}>{description}</Text>
        </Styles.Info>
      </Styles.Content>
      <Checkbox
        checked={selected}
        onChange={(e) => onSelected(e.target.checked)}
      />
    </Styles.Wrapper>
  );
}
