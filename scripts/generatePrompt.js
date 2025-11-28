#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const paths = {
  contract: path.join(projectRoot, 'lib', 'contract.ts'),
  hook: path.join(projectRoot, 'hooks', 'useContract.ts'),
  sample: path.join(projectRoot, 'components', 'sample.tsx'),
};

function buildExplorerLink(contractAddress) {
  if (!contractAddress || contractAddress === 'NOT_SET') {
    return 'Explorer link: Not available';
  }

  return `https://coston2-explorer.flare.network/address/${contractAddress}`;
}

function readFileOrPlaceholder(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return `// File missing: ${path.relative(projectRoot, filePath)}`;
  }
}

function getTimestamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(
    now.getHours(),
  )}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function extractContractAddress(content) {
  const match = content.match(/contractAddress\s*=\s*"([^"]*)"/);
  return match && match[1] ? match[1] : 'NOT_SET';
}

function buildPromptContent(contractContent, hookContent, sampleContent) {
  const contractAddress = extractContractAddress(contractContent);
  const explorerLink = buildExplorerLink(contractAddress);

  return `**IMPORTANT: Return ONLY the updated files (.ts, .tsx, and README.md). No explanations.**

## Contract Details
- Contract address: \`${contractAddress}\`
- ${explorerLink}
- Contract source: \`lib/contract.ts\`
- Hook: \`hooks/useContract.ts\`
- Sample UI: \`components/sample.tsx\`

---

# File 1: \`lib/contract.ts\`

\`\`\`ts
${contractContent}
\`\`\`

---

# File 2: \`hooks/useContract.ts\`

\`\`\`ts
${hookContent}
\`\`\`

---

# File 3: \`components/sample.tsx\`

\`\`\`tsx
${sampleContent}
\`\`\`

---

# File 4: \`README.md\`

Create a comprehensive README.md file in a separate markdown file with the following sections:

1. **Project Title**: A clear and descriptive title for the project
2. **Contract Address**: \`${contractAddress}\` (${explorerLink})
3. **Description**: A detailed description of what the project does, its purpose, and its main functionality
4. **Features**: A well-structured list of key features and capabilities of the project
5. **How It Solves**: A detailed explanation of the problem this project addresses and how it provides a solution, including use cases and benefits

Write the README in a professional, well-descriptive manner that clearly communicates the project's value proposition and technical details.

---

Update the hook and UI to use the contract above. Keep wallet gating, loading state, and error handling intact.`;
}

function main() {
  const contractContent = readFileOrPlaceholder(paths.contract);
  const hookContent = readFileOrPlaceholder(paths.hook);
  const sampleContent = readFileOrPlaceholder(paths.sample);

  const promptsDir = path.join(projectRoot, 'prompt');
  ensureDirectory(promptsDir);

  const fileName = `prompt_${getTimestamp()}.md`;
  const filePath = path.join(promptsDir, fileName);

  const promptContent = buildPromptContent(contractContent, hookContent, sampleContent);

  fs.writeFileSync(filePath, promptContent, 'utf8');

  console.log(`✅ Prompt generated: prompt/${fileName}`);
}

main();

