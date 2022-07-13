import { Box, Grid } from "@mui/material";
import { AddCircle, ArrowCircleDown } from "@mui/icons-material";
import { useCustomTheme } from "@coral-xyz/themes";
import { ActionCard } from "../Layout/ActionCard";
import { BackpackHeader } from "../Locked";
import type { OnboardingFlows } from "./";

export function OnboardingWelcome({
  onSelect,
}: {
  onSelect: (flow: OnboardingFlows) => void;
}) {
  const theme = useCustomTheme();
  return (
    <div
      style={{
        background: theme.custom.colors.nav,
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        padding: "20px",
      }}
    >
      <Box>
        <BackpackHeader />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ActionCard
            icon={<AddCircle />}
            text="Create a new wallet"
            onClick={() => onSelect("create-wallet")}
          />
        </Grid>
        <Grid item xs={6}>
          <ActionCard
            icon={<ArrowCircleDown />}
            text="Import an existing wallet"
            onClick={() => onSelect("import-wallet")}
          />
        </Grid>
      </Grid>
    </div>
  );
}