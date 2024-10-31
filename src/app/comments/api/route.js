export async function GET() {
  return Response.json(comments, {
    headers: {
      'Set-Cookie': 'theme=dark',
    },
  });
}

export async function POST(req) {
  const { text } = await req.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  return Response.json({
    message: 'nee comment added successfully',
    comments,
  });
}

const comments = [
  {
    id: 1,
    text: 'This is the first comment.',
  },
  {
    id: 2,
    text: 'This is the Second comment.',
  },
  {
    id: 3,
    text: 'This is the Third comment.',
  },
];
