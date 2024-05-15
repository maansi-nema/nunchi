import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { red } from "@mui/material/colors";
import GroupIcon from "@mui/icons-material/Group";

function MembershipsExpiringCard() {
  const members = [
    {
      name: "Barry L.",
      expires: "2 days",
      tags: [
        "#product",
        "photography",
        "healthcare",
        "MI angel",
        "newyork",
        "startups",
        "fintech",
      ],
      color: red[500],
      image: "/barry.jpeg",
    },
    {
      name: "Ian B.",
      expires: "3 days",
      tags: [
        "#innovation",
        "businessstrategy",
        "chicago",
        "techstartups",
        "design",
      ],
      color: red[500],
      image: "/ian.jpeg",
    },
    {
      name: "Lisa M.",
      expires: "3 days",
      tags: [
        "#founder",
        "angel",
        "teamlead",
        "OH",
        "innovator",
        "tech",
        "marketing",
        "dev",
      ],
      color: red[500],
      image: "/lisa.png",
    },
  ];

  return (
    <Paper elevation={0} sx={{ padding: 2, backgroundColor: "transparent" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <GroupIcon sx={{ marginRight: 1, fontSize: "inherit" }} />
        Memberships Expiring: <span style={{ fontWeight: "bold" }}>5</span>
      </Typography>

      <Grid container spacing={2}>
        {members.map((member, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                boxShadow: "none",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 0, // Ensure avatars are square as specified
                }}
                src={member.image}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: member.color, fontWeight: "bold" }}
                  >
                    Expires in {member.expires}
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "left",
                    maxWidth: 300,
                    whiteSpace: "normal",
                  }}
                >
                  {member.tags.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default MembershipsExpiringCard;
