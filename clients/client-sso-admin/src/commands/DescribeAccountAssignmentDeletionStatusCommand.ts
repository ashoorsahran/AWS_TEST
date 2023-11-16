// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
} from "../models/models_0";
import {
  de_DescribeAccountAssignmentDeletionStatusCommand,
  se_DescribeAccountAssignmentDeletionStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAssignmentDeletionStatusCommand}.
 */
export interface DescribeAccountAssignmentDeletionStatusCommandInput
  extends DescribeAccountAssignmentDeletionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAssignmentDeletionStatusCommand}.
 */
export interface DescribeAccountAssignmentDeletionStatusCommandOutput
  extends DescribeAccountAssignmentDeletionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the status of the assignment deletion request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeAccountAssignmentDeletionStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountAssignmentDeletionRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAssignmentDeletionStatusResponse
 * //   AccountAssignmentDeletionStatus: { // AccountAssignmentOperationStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     TargetId: "STRING_VALUE",
 * //     TargetType: "AWS_ACCOUNT",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     PrincipalType: "USER" || "GROUP",
 * //     PrincipalId: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountAssignmentDeletionStatusCommandInput - {@link DescribeAccountAssignmentDeletionStatusCommandInput}
 * @returns {@link DescribeAccountAssignmentDeletionStatusCommandOutput}
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class DescribeAccountAssignmentDeletionStatusCommand extends $Command<
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
  SSOAdminClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeAccountAssignmentDeletionStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAccountAssignmentDeletionStatusCommandInput,
    DescribeAccountAssignmentDeletionStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAccountAssignmentDeletionStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeAccountAssignmentDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeAccountAssignmentDeletionStatus",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeAccountAssignmentDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAccountAssignmentDeletionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> {
    return de_DescribeAccountAssignmentDeletionStatusCommand(output, context);
  }
}
