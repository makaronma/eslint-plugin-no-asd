import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    // hasSuggestions: true,
  },

  create: (context) => {
    return {
      VariableDeclaration(node) {
        if (
          node.declarations.some(
            (d) => d.id.type === "Identifier" && d.id.name === "asd"
          )
        ) {
          context.report({
            node,
            message: 'Do not use "asd" as variable name.',
          });
        }
      },
    };
  },
};

export default rule;