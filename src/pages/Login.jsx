import React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#fafafa",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 10 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          letterSpacing="-0.5px"
          gutterBottom
        >
          YT Uploader
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={440}
          lineHeight={1.6}
        >
          Upload, manage, and organize your YouTube content in one place.
          Built for creators who value speed and simplicity.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box minWidth={280}>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={1}
            textAlign="center"
          >
            Sign in to continue
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* GOOGLE BUTTON — UNCHANGED */}
          <Button
            startIcon={<GoogleIcon />}
            size="large"
            variant="outlined"
            fullWidth
            onClick={() => {
              console.log("Logging with google");
            }}
          >
            Login with Google
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            mt={2}
            textAlign="center"
          >
            We’ll never post anything without your permission
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
