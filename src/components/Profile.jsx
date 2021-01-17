import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfileCard from "./Card.jsx";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Profile(){
    const classes = useStyles();
    return (
        <div className="{classes.root} profile-section-margin profile-section-background">
      <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
          <ProfileCard imageSrc="/static/images/github.png" name="Github" desc="anubhav14g" redirectLink="https://github.com/anubhav14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc="/static/images/codechef.jpg" name="Codechef" desc="anubhav_14g" redirectLink="https://www.codechef.com/users/anubhav_14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc="/static/images/leetcode.jpg" name="Leetcode" desc="anubhav_14g" redirectLink="https://leetcode.com/anubhav_14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc="/static/images/codeforces.png" name="Codeforces" desc="anubhav1408sks" redirectLink="https://codeforces.com/profile/anubhav1408sks"/>
        </Grid>
      </Grid>
    </div>
    );
}

export default Profile;