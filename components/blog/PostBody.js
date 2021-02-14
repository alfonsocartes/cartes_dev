// import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
