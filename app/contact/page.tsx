const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setError("");
    setSuccess("");
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
  
      setSuccess("✅ Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Server error");
    }
  };
  