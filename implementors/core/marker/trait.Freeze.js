(function() {var implementors = {};
implementors["lpc55"] = [{"text":"impl Freeze for Command","synthetic":true,"types":[]},{"text":"impl Freeze for CommandTag","synthetic":true,"types":[]},{"text":"impl Freeze for DataPhase","synthetic":true,"types":[]},{"text":"impl Freeze for HidHeader","synthetic":true,"types":[]},{"text":"impl Freeze for ResponseTag","synthetic":true,"types":[]},{"text":"impl Freeze for Response","synthetic":true,"types":[]},{"text":"impl Freeze for ReportId","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for FlashReadMargin","synthetic":true,"types":[]},{"text":"impl Freeze for Key","synthetic":true,"types":[]},{"text":"impl Freeze for KeystoreOperation","synthetic":true,"types":[]},{"text":"impl Freeze for ErrorGroup","synthetic":true,"types":[]},{"text":"impl Freeze for GenericError","synthetic":true,"types":[]},{"text":"impl Freeze for FlashDriverError","synthetic":true,"types":[]},{"text":"impl Freeze for SbLoaderError","synthetic":true,"types":[]},{"text":"impl Freeze for PropertyStoreError","synthetic":true,"types":[]},{"text":"impl Freeze for CrcCheckerError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for GetProperties&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Properties","synthetic":true,"types":[]},{"text":"impl Freeze for Property","synthetic":true,"types":[]},{"text":"impl Freeze for AvailableCommands","synthetic":true,"types":[]},{"text":"impl Freeze for AvailablePeripherals","synthetic":true,"types":[]},{"text":"impl Freeze for PfrKeystoreUpdateOptions","synthetic":true,"types":[]},{"text":"impl Freeze for IrqNotificationPin","synthetic":true,"types":[]},{"text":"impl Freeze for Protocol","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for ResponsePacket","synthetic":true,"types":[]},{"text":"impl Freeze for ReceivedPacket","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for Bootloader","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for ProtectedFlash","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Freeze for FactorySettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Freeze for CustomerSettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Freeze for WrappedFactorySettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Freeze for WrappedCustomerSettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for KeystoreHeader","synthetic":true,"types":[]},{"text":"impl Freeze for Keycode","synthetic":true,"types":[]},{"text":"impl Freeze for ActivationCode","synthetic":true,"types":[]},{"text":"impl Freeze for Keystore","synthetic":true,"types":[]},{"text":"impl Freeze for NxpArea","synthetic":true,"types":[]},{"text":"impl Freeze for BootSpeed","synthetic":true,"types":[]},{"text":"impl Freeze for IspMode","synthetic":true,"types":[]},{"text":"impl Freeze for BootConfiguration","synthetic":true,"types":[]},{"text":"impl Freeze for UsbId","synthetic":true,"types":[]},{"text":"impl Freeze for TrustzoneMode","synthetic":true,"types":[]},{"text":"impl Freeze for SecureBootConfiguration","synthetic":true,"types":[]},{"text":"impl Freeze for PrinceConfiguration","synthetic":true,"types":[]},{"text":"impl Freeze for PrinceSubregion","synthetic":true,"types":[]},{"text":"impl Freeze for RawCustomerData","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Freeze for CustomerSettingsArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl Freeze for RawVendorUsage","synthetic":true,"types":[]},{"text":"impl Freeze for FactorySettingsProgInProgress","synthetic":true,"types":[]},{"text":"impl Freeze for RotKeysStatus","synthetic":true,"types":[]},{"text":"impl Freeze for PrinceIvCode","synthetic":true,"types":[]},{"text":"impl Freeze for MonotonicCounter","synthetic":true,"types":[]},{"text":"impl Freeze for RotKeyStatus","synthetic":true,"types":[]},{"text":"impl Freeze for DebugSecurity","synthetic":true,"types":[]},{"text":"impl Freeze for DebugSecurityPolicy","synthetic":true,"types":[]},{"text":"impl Freeze for DebugSecurityPolicies","synthetic":true,"types":[]},{"text":"impl Freeze for SigningKeySource","synthetic":true,"types":[]},{"text":"impl Freeze for Pki","synthetic":true,"types":[]},{"text":"impl Freeze for WrappedPki","synthetic":true,"types":[]},{"text":"impl Freeze for SigningKey","synthetic":true,"types":[]},{"text":"impl Freeze for PublicKey","synthetic":true,"types":[]},{"text":"impl Freeze for Signature","synthetic":true,"types":[]},{"text":"impl Freeze for CertificateSlot","synthetic":true,"types":[]},{"text":"impl Freeze for CertificateSource","synthetic":true,"types":[]},{"text":"impl Freeze for Certificate","synthetic":true,"types":[]},{"text":"impl Freeze for Certificates","synthetic":true,"types":[]},{"text":"impl Freeze for Sha256Hash","synthetic":true,"types":[]},{"text":"impl Freeze for BootTag","synthetic":true,"types":[]},{"text":"impl Freeze for RawBootCommand","synthetic":true,"types":[]},{"text":"impl Freeze for BootCommandDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for BootCommand","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for Firmware","synthetic":true,"types":[]},{"text":"impl Freeze for Reproducibility","synthetic":true,"types":[]},{"text":"impl Freeze for Filetype","synthetic":true,"types":[]},{"text":"impl Freeze for Sb21FileParameters","synthetic":true,"types":[]},{"text":"impl Freeze for UnsignedSb21File","synthetic":true,"types":[]},{"text":"impl Freeze for Sb21CommandPart","synthetic":true,"types":[]},{"text":"impl Freeze for SignedSb21File","synthetic":true,"types":[]},{"text":"impl Freeze for Sb21HeaderPart","synthetic":true,"types":[]},{"text":"impl Freeze for CertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for Keyblob","synthetic":true,"types":[]},{"text":"impl Freeze for Sb2Header","synthetic":true,"types":[]},{"text":"impl Freeze for FullCertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl Freeze for SignedImage","synthetic":true,"types":[]},{"text":"impl Freeze for ImageSigningRequest","synthetic":true,"types":[]},{"text":"impl Freeze for HttpConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Server","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()