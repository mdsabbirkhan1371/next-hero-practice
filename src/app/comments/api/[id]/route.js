// pages/api/comments/[id].js
export async function PATCH(req, { params }) {
  const { text } = await req.json(); // Only extracting 'text' since 'id' comes from params
  const { id } = params; // Getting id from URL params

  const comment = comments.find(comment => comment.id === parseInt(id));

  if (!comment) {
    return new Response('Comment not found', { status: 404 });
  }

  // Update only the provided fields
  if (text !== undefined) {
    comment.text = text;
  }

  return new Response(
    JSON.stringify({
      message: 'Comment partially updated!',
      comments,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }
  );
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const commentIndex = comments.findIndex(
    comment => comment.id === parseInt(id)
  );
  if (commentIndex === -1) {
    return new Response('Comment not found', { status: 404 });
  }
  comments.splice(commentIndex, 1);
  return new Response(
    JSON.stringify({
      message: 'Comment deleted!',
      comments,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }
  );
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
