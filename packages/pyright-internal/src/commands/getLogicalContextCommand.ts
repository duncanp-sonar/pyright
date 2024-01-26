import { CancellationToken, ExecuteCommandParams } from 'vscode-languageserver';
import { LanguageServerInterface } from '../languageServerBase';
import { ServerCommand } from './commandController';

export class GetLogicalContextCommand implements ServerCommand {
    constructor(private _ls: LanguageServerInterface) {}

    execute(cmdParams: ExecuteCommandParams, token: CancellationToken): Promise<any> {
        const result = JSON.stringify({ type: 'myType', member: 'aType', param: 'aParam', paramIndex: 1 });

        this._ls.console.info(`[XXX Server:GetLogicalContext] GetLogicalContextCommand result: ${result}`);

        return Promise.resolve(result);
    }
}
