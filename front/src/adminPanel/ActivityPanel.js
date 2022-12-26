import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useEffect, useState } from "react";
import ButterToast, { Cinnamon, POS_BOTTOM, POS_RIGHT } from "butter-toast";
import SearchIcon from "@mui/icons-material/Search";
import ClipBoardIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import LikeIcon from "@mui/icons-material/StarHalf";
import GlobeIcon from "@mui/icons-material/LocationCity";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import adminService from "../services/admin.service";

export default function ActivityPanel() {
  const [count, setCount] = useState(0);
  const [likeArray, setLikeAray] = useState();
  const [matchArray, setMatchArray] = useState();
  const [viewArray, setViewArray] = useState();
  const [memberArray, setMembers] = useState();
  const mapActivites = async () => {
    const res = await adminService.getActivityPanelResponse();
    const likes = res.data.likes;
    const matches = res.data.matches;
    const views = res.data.views;
    const members = res.data.members;
    setMembers(members);

    const unresolvedLikes = likes.map(async (item, index) => {
      const user1 = await adminService.getUser(item.user_id);

      const unresolvedusers = item.like_id.map(async (item, index) => {
        const likings = await adminService.getUser(item[0]);
        return likings;
      });
      const user2 = await Promise.all(unresolvedusers);
      return { user1, user2 };
    });
    const likesWithNames = await Promise.all(unresolvedLikes);
    setLikeAray(likesWithNames);
    const unresolvedMatches = matches.map(async (item, index) => {
      const user1 = await adminService.getUser(item.user_id);
      const unresolvedusers = item.match_id.map(async (item, index) => {
        const matchings = await adminService.getUser(item[0]);
        return matchings;
      });
      const user2 = await Promise.all(unresolvedusers);
      return { user1, user2 };
    });
    const matchesWithNames = await Promise.all(unresolvedMatches);
    setMatchArray(matchesWithNames);
    const unresolvedViews = views.map(async (item, index) => {
      const user1 = await adminService.getUser(item.user_id);
      const unresolvedusers = item.view_id.map(async (item, index) => {
        const viewings = await adminService.getUser(item[0]);
        return viewings;
      });
      const user2 = await Promise.all(unresolvedusers);
      return { user1, user2 };
    });
    const viewsWithNames = await Promise.all(unresolvedViews);
    setViewArray(viewsWithNames);
  };
  useEffect(async () => {
    await mapActivites();
  }, []);
  const notifications = [
    {
      title: "viewed",
      description: "{member} viewed {member}",
      time: "1hr",
      color: "#2c8ca5",
    },
    {
      title: "joined",
      description: "{new member} Joined!",
      time: "2hr",
      color: "#d04185",
    },
    {
      title: "matched",
      description: "{member} matched {member}",
      time: "4hr",
      color: "#2fb9c8",
    },
    {
      title: "liked",
      description: "{member} liked {member}",
      time: "3min",
      color: "#5b8fbd",
    },
    {
      title: "edited",
      description: "{member} edited profile",
      time: "1min",
      color: "#f4b3b0",
    },
  ];
  return (
    <Card sx={{ minWidth: 275, minHeight: 538 }}>
      <CardHeader
        style={{ color: "rgba(163, 19, 19, 0.65)" }}
        title={"Activity"}
      ></CardHeader>
      <CardContent style={{ maxHeight: 500, overflow: "auto" }}>
        <Typography style={{ color: "crimson" }}>{"Likes"}</Typography>
        <List sx={{ maxHeight: 100, overflow: "auto", marginBottom: 5 }}>
          {likeArray?.map((itx, index) => (
            <React.Fragment>
              {itx?.user2?.map((item, index) => (
                <ListItem>
                  <ListItemIcon>
                    <LikeIcon style={{ color: "#5b8fd" }} />
                  </ListItemIcon>
                  <Typography
                    style={{
                      fontSize: "12px",
                      marginRight: "20px",
                      color: "#5b8fd",
                    }}
                  >
                    {itx?.user1?.data?.first_name +
                      " liked " +
                      item?.data?.first_name}
                  </Typography>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
        <Typography style={{ color: "crimson" }}>{"Matches"}</Typography>
        <List sx={{ maxHeight: 100, overflow: "auto", marginBottom: 5 }}>
          {matchArray?.map((itx, index) => (
            <React.Fragment>
              {itx?.user2?.map((item, index) => (
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: "#2fb9c8" }} />
                  </ListItemIcon>
                  <Typography
                    style={{
                      fontSize: "12px",
                      marginRight: "20px",
                      color: "#2fb9c8",
                    }}
                  >
                    {itx?.user1?.data?.first_name +
                      " matched " +
                      item?.data?.first_name}
                  </Typography>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
        <Typography style={{ color: "crimson" }}>{"Views"}</Typography>
        <List sx={{ maxHeight: 100, overflow: "auto", marginBottom: 5 }}>
          {viewArray?.map((itx, index) => (
            <React.Fragment>
              {itx?.user2?.map((item, index) => (
                <ListItem>
                  <ListItemIcon>
                    <SearchIcon style={{ color: "#2c8ca5" }} />
                  </ListItemIcon>
                  <Typography
                    style={{
                      fontSize: "12px",
                      marginRight: "20px",
                      color: "#2c8ca5",
                    }}
                  >
                    {itx?.user1?.data?.first_name +
                      " viewed " +
                      item?.data?.first_name}
                  </Typography>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
        <Typography style={{ color: "crimson" }}>{"Joined"}</Typography>
        <List sx={{ maxHeight: 100, overflow: "auto", marginBotton: 5 }}>
          {memberArray?.map((itx, index) => (
            <React.Fragment>
              <ListItem>
                <ListItemIcon>
                  <ClipBoardIcon style={{ color: "#d04185" }} />
                </ListItemIcon>
                <Typography
                  style={{
                    fontSize: "12px",
                    marginRight: "20px",
                    color: "#d04185",
                  }}
                >
                  {itx?.first_name + " joined "}
                </Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
