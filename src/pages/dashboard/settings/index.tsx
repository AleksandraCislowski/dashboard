import React from "react";
import { Box, Button, FormGroup, Paper, Typography } from "@mui/material";
import ToggleSwitch from "@/components/settings/ToggleSwitch";
import TextBox from "@/components/settings/TextBox";
import classes from "@/styles/WorkspaceSettings.module.scss";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showConversion, setShowConversion] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);
  const [showBilling, setShowBilling] = React.useState(false);
  const [showAnnouncements, setShowAnnouncements] = React.useState(false);
  const [showAlerts, setShowAlerts] = React.useState(true);
  const [showSharedDashboards, setShowSharedDashboards] = React.useState(false);
  const [showDigest, setShowDigest] = React.useState(true);
  const [saved, setSaved] = React.useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);

  const toggler = (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setSaved(false);
    setHasUnsavedChanges(true);
    callback(event.target.checked);
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
    setHasUnsavedChanges(false);
  };

  const visibleMetrics = [
    showRevenue && "Revenue",
    showOrders && "Orders",
    showConversion && "Conversion",
    showCustomers && "Returning customers",
  ].filter(Boolean);
  const activeAlerts = [
    showBilling && "billing",
    showAnnouncements && "product",
    showAlerts && "performance",
    showSharedDashboards && "shared dashboards",
    showDigest && "digest",
  ].filter(Boolean);
  const sharedDashboardTeams = showSharedDashboards ? 2 : 0;
  const summaryCards = [
    {
      label: "Visible metrics",
      value: `${visibleMetrics.length} enabled`,
      context:
        visibleMetrics.length > 0
          ? `${visibleMetrics.join(", ")} shown on the overview.`
          : "No overview metrics are currently enabled.",
    },
    {
      label: "Alert channels",
      value: `${activeAlerts.length} active`,
      context:
        activeAlerts.length > 0
          ? `${activeAlerts.join(", ")} updates enabled.`
          : "No automatic alert channels are enabled.",
    },
    {
      label: "Shared dashboards",
      value:
        sharedDashboardTeams > 0
          ? `${sharedDashboardTeams} teams`
          : "Off",
      context: showSharedDashboards
        ? "leadership and operations use the same saved view"
        : "saved dashboard defaults stay private to this workspace",
    },
  ];

  return (
    <Box className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroIntro}>
          <span className={classes.kicker}>Preferences</span>
          <h2>Control the signals that shape your daily workspace.</h2>
          <p>
            Tune which metrics stay visible, how Northstar alerts the team, and
            which dashboard defaults should be shared across the organization.
          </p>
        </div>
        <Paper className={classes.heroPanel}>
          <span className={classes.panelEyebrow}>Workspace status</span>
          <div className={classes.heroMeta}>
            <div>
              <strong>Overview cards</strong>
              <span>
                {visibleMetrics.length > 0
                  ? visibleMetrics.join(", ")
                  : "No metrics selected"}
              </span>
            </div>
            <div>
              <strong>Digest cadence</strong>
              <span>
                {showDigest ? "Weekly, Friday morning" : "Digest disabled"}
              </span>
            </div>
            <div>
              <strong>Preference state</strong>
              <span>
                {hasUnsavedChanges
                  ? "Unsaved changes ready to save"
                  : "Workspace preferences are up to date"}
              </span>
            </div>
          </div>
        </Paper>
      </section>

      <section className={classes.summaryGrid}>
        {summaryCards.map((item) => (
          <Paper key={item.label} className={classes.summaryCard}>
            <span className={classes.cardLabel}>{item.label}</span>
            <strong>{item.value}</strong>
            <span className={classes.cardContext}>{item.context}</span>
          </Paper>
        ))}
      </section>

      <form onSubmit={handleSave} className={classes.formLayout}>
        <Paper className={classes.sectionPanel}>
          <div className={classes.sectionHeader}>
            <div>
              <span className={classes.sectionKicker}>Dashboard</span>
              <Typography variant='h5'>Visible metrics</Typography>
            </div>
            <Typography className={classes.subtleText}>
              Choose which signals stay front and center on the Northstar
              overview screen.
            </Typography>
          </div>

          <FormGroup>
            <ToggleSwitch
              checked={showRevenue}
              onChange={(event) => toggler(event, setShowRevenue)}
              label='Net revenue'
            />
            <ToggleSwitch
              checked={showConversion}
              onChange={(event) => toggler(event, setShowConversion)}
              label='Conversion rate'
            />
            <ToggleSwitch
              checked={showOrders}
              onChange={(event) => toggler(event, setShowOrders)}
              label='Orders'
            />
            <ToggleSwitch
              checked={showCustomers}
              onChange={(event) => toggler(event, setShowCustomers)}
              label='Returning customer share'
            />
          </FormGroup>
        </Paper>

        <Paper className={classes.sectionPanel}>
          <div className={classes.sectionHeader}>
            <div>
              <span className={classes.sectionKicker}>Alerts</span>
              <Typography variant='h5'>Team notifications</Typography>
            </div>
            <Typography className={classes.subtleText}>
              Decide which updates should reach the team automatically and which
              should stay inside the workspace.
            </Typography>
          </div>

          <div className={classes.preferenceList}>
            <div className={classes.preferenceCard}>
              <TextBox
                subtitle='Billing and workspace'
                paragraph='Essential workspace activity, billing updates, and account security notices.'
              />
              <ToggleSwitch
                checked={showBilling}
                onChange={(event) => toggler(event, setShowBilling)}
                label=''
                ariaLabel='Toggle billing and workspace notifications'
              />
            </div>
            <div className={classes.preferenceCard}>
              <TextBox
                subtitle='Product updates'
                paragraph='Feature launches, reporting improvements, and occasional Northstar product news.'
              />
              <ToggleSwitch
                checked={showAnnouncements}
                onChange={(event) => toggler(event, setShowAnnouncements)}
                label=''
                ariaLabel='Toggle product update notifications'
              />
            </div>
            <div className={classes.preferenceCard}>
              <TextBox
                subtitle='Performance alerts'
                paragraph='Get notified when conversion, revenue, or refund signals drift outside expected ranges.'
              />
              <ToggleSwitch
                checked={showAlerts}
                onChange={(event) => toggler(event, setShowAlerts)}
                label=''
                ariaLabel='Toggle performance alerts'
              />
            </div>
            <div className={classes.preferenceCard}>
              <TextBox
                subtitle='Shared dashboards'
                paragraph='Allow teammates to view your saved dashboard setup and workspace defaults.'
              />
              <ToggleSwitch
                checked={showSharedDashboards}
                onChange={(event) => toggler(event, setShowSharedDashboards)}
                label=''
                ariaLabel='Toggle shared dashboards'
              />
            </div>
            <div className={classes.preferenceCard}>
              <TextBox
                subtitle='Digest emails'
                paragraph='Receive a recurring summary of key storefront metrics and notable changes.'
              />
              <ToggleSwitch
                checked={showDigest}
                onChange={(event) => toggler(event, setShowDigest)}
                label=''
                ariaLabel='Toggle digest emails'
              />
            </div>
          </div>

          <div className={classes.actionRow}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={!hasUnsavedChanges}
            >
              Save preferences
            </Button>
            <Typography
              className={classes.subtleText}
              role='status'
              aria-live='polite'
            >
              {hasUnsavedChanges
                ? "Changes are previewed above. Save to confirm this demo workspace state."
                : "This portfolio build stores changes locally for preview only."}
            </Typography>
          </div>

          {saved && (
            <div className={classes.successCard}>
              Preferences updated. In a production workspace, this would also
              refresh dashboard defaults and notification routing.
            </div>
          )}
        </Paper>
      </form>
    </Box>
  );
};

export default Settings;
