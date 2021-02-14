export default function PostBody({ content }) {
  return (
    <div
      className="prose dark:prose-dark max-w-none w-full"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
