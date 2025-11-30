import { generate } from 'openapi-typescript-codegen';
import * as fs from 'fs';
import * as path from 'path';

const swaggerUrl =
  'http://localhost:5057/Swagger/BackOffice/swagger.json?urls.primaryName=BackOffice';

const generatedDir = './src/services/generated';
const extendDir = './src/services/';

generate({
  input: swaggerUrl,
  output: generatedDir,
  httpClient: 'fetch',
})
  .then(() => {
    console.log('API client generated successfully!');
    generateExtendedServices();
  })
  .catch((err) => {
    console.error('Generation failed:', err);
    process.exit(2);
  });

function generateExtendedServices() {
  if (!fs.existsSync(extendDir)) {
    fs.mkdirSync(extendDir, { recursive: true });
  }

  const files = fs.readdirSync(generatedDir + '/services');

  files.forEach((file) => {
    if (!file.endsWith('Service.ts')) return;

    const serviceName = file.replace('.ts', '');
    const baseImportPath = `../generated/${serviceName}`;
    const extendFilePath = path.join(extendDir, file);

    // اگر قبلاً ساخته شده، دوباره نساز
    if (fs.existsSync(extendFilePath)) return;

    const content = `import { ${serviceName} as Base${serviceName} } from '${baseImportPath}';

export class ${serviceName} extends Base${serviceName} {
  // You can override methods here
}
`;

    fs.writeFileSync(extendFilePath, content);
    console.log(`Extended service created: ${file}`);
  });
}
