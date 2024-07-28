import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold my-6" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-semibold my-5" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-medium my-4" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-xl font-medium my-3" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className="text-lg font-medium my-2" {...props} />
        ),
        h6: ({ node, ...props }) => (
          <h6 className="text-base font-medium my-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="my-2 leading-relaxed" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside my-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside my-4" {...props} />
        ),
        li: ({ node, ...props }) => <li className="my-1" {...props} />,
        a: ({ node, ...props }) => (
          <a className="text-blue-600 hover:underline" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic"
            {...props}
          />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-bold" {...props} />
        ),
        em: ({ node, ...props }) => <em className="italic" {...props} />,
        table: ({ node, ...props }) => (
          <table className="w-full border-collapse my-4" {...props} />
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-100" {...props} />
        ),
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => <tr className="border-b" {...props} />,
        th: ({ node, ...props }) => (
          <th className="p-2 text-left font-semibold" {...props} />
        ),
        td: ({ node, ...props }) => <td className="p-2" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
