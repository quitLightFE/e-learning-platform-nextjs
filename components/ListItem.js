// import { styled } from "@mui/material";
import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";

const MyListItem = styled(ListItem)(({ theme }) => ({
  "& span": { fontWeight: "400" },
  "&:hover, &.active": {
    trasition: "0.3s",
    color: "white",
    background: `linear-gradient(to right top, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,

    "& svg": {
      color: "white",
    },
  },
}));

export default MyListItem;
