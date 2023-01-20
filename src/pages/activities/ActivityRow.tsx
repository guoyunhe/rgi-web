import { Box } from '@mui/material';
import Activity from '../../types/models/Activity';

export interface ActivityRowProps {
  activity: Activity;
}

export default function ActivityRow({ activity }: ActivityRowProps) {
  return (
    <Box>
      [{activity.createdAt}] [{activity.type}] {activity.action} {JSON.stringify(activity.data)}
    </Box>
  );
}
