export enum ScoreColor {
  PASS = 'osa-score pass',
  FAIL = 'osa-score fail',
  AVERAGE = 'osa-score average'
}

export function getScoreColor(score: number) {
  if (!score) { return ''; }

  if (score > 74) { return ScoreColor.PASS; }

  if (score <= 74 && score > 44) { return ScoreColor.AVERAGE; }

  return ScoreColor.FAIL;
}
