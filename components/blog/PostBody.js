// import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return <div className="" dangerouslySetInnerHTML={{ __html: content }} />;
}
