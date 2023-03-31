import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "1.5rem", maxWidth: "80%", textAlign: "center" }}>
        {title}
      </h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.1rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-globe"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink
            link={source}
            title={"Info and Source Code"}
            icon={"fa fa-code"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
