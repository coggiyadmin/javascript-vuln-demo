// TN — benign template fill; builds a notice from validated typed fields, no AI surface.
function render(notice) {
  if (notice.amount < 0) throw new Error('amount must be non-negative');
  return `Hi ${notice.user}, your balance changed by ${notice.amount} credits.`;
}
module.exports = { render };
