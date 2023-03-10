import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import { BooleanParam, NumberParam, useQueryParam } from 'use-query-params';
import Game from '../../types/models/Game';
import PaginatedResult from '../../types/PaginatedResult';
import GameCard from './GameCard';

export default function GameList() {
  const { t } = useTranslation();
  const { data: platforms = [] } = useSWR<any[]>('platforms');
  const [page, setPage] = useQueryParam('page', NumberParam);
  const [platform, setPlatform] = useQueryParam('platform', NumberParam);
  const [noBoxartImage, setNoBoxartImage] = useQueryParam('noBoxartImage', BooleanParam);
  const { data } = useSWR<PaginatedResult<Game>>(
    `games?page=${page || 1}&platform=${platform || 1}&perPage=12&noBoxartImage=${
      noBoxartImage ? 1 : 0
    }`
  );

  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handlePlatformChange = (e: SelectChangeEvent<string>) => {
    setPlatform(Number(e.target.value));
  };

  const handleNoBoxartImageChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setNoBoxartImage(checked);
    setPage(1);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select value={String(platform || 1)} onChange={handlePlatformChange} size="small">
          {platforms.map((p) => (
            <MenuItem key={p.id} value={String(p.id)}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={
            <Checkbox checked={noBoxartImage || false} onChange={handleNoBoxartImageChange} />
          }
          label={t('No boxart image')}
        />
      </Box>
      {data && (
        <Grid container spacing={3}>
          {data.data.map((game) => {
            return (
              <Grid item xs={12} md={6} xl={4} key={game.id}>
                <GameCard game={game} />
              </Grid>
            );
          })}
        </Grid>
      )}
      <Pagination
        page={page || 1}
        count={data?.meta.lastPage}
        onChange={handlePageChange}
        sx={{ mt: 3 }}
      />
    </Container>
  );
}
