import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Divider,
} from "@mui/material";
import {
  CloudUpload,
  Description,
  Publish,
  Title,
  Visibility,
} from "@mui/icons-material";

function Upload() {
  const [videoFile, setVideoFile] = useState(null);
  const [visibility, setVisibility] = useState("public");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setError("File size must be less than 50MB");
      setVideoFile(null);
      return;
    }

    setError("");
    setVideoFile(file);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
      }}
    >
      <Paper
  elevation={6}
  sx={{
    width: 420,
    p: 3,
    borderRadius: 3,
    bgcolor: "background.paper", // <-- use theme
    color: "text.primary",       // <-- use theme
  }}
>

        {/* Header */}
        <Typography fontWeight={600} variant="h6">
          Upload video
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Share your content
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Form */}
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            size="small"
            label="Title"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Title fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            size="small"
            label="Description"
            fullWidth
            multiline
            rows={2}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          {/* Upload */}
          <Box
            sx={{
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
            }}
          >
            <input
              hidden
              type="file"
              accept="video/*"
              id="video-upload"
              onChange={handleFileChange}
            />

            <label htmlFor="video-upload">
              <Button
                size="small"
                variant="outlined"
                component="span"
                startIcon={<CloudUpload fontSize="small" />}
              >
                Choose file
              </Button>
            </label>

            {videoFile && (
              <Typography variant="caption" display="block" mt={1}>
                {videoFile.name}
              </Typography>
            )}

            {error && (
              <Typography variant="caption" color="error" mt={1}>
                {error}
              </Typography>
            )}
          </Box>

          {/* Visibility */}
          <FormControl size="small" fullWidth>
  <InputLabel id="visibility-label">Visibility</InputLabel>

  <Select
    labelId="visibility-label"
    value={visibility}
    label="Visibility"
    onChange={(e) => setVisibility(e.target.value)}
    input={
      <OutlinedInput
        label="Visibility"
        startAdornment={
          <InputAdornment position="start">
            <Visibility fontSize="small" />
          </InputAdornment>
        }
      />
    }
  >
    <MenuItem value="public">Public</MenuItem>
    <MenuItem value="unlisted">Unlisted</MenuItem>
    <MenuItem value="private">Private</MenuItem>
  </Select>
</FormControl>

          {/* Publish */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<Publish />}
            disabled={!videoFile}
            sx={{
              mt: 1,
              py: 1,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Publish
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Upload;
